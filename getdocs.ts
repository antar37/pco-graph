const axios = require("axios");
const fs = require("fs");

const entityTypes = [
  "calendar",
  "check-ins",
  "giving",
  "groups",
  "people",
  "publishing",
  "services",
];

interface VertexDetail {
  name: string;
  // Add other properties here based on the response data structure
}

async function fetchVerticesForEntity(entity: string): Promise<VertexDetail[]> {
  try {
    const baseURL = `https://api.planningcenteronline.com/${entity}/v2/documentation`;

    // Step 1: Get the latest version
    const versionResponse = await axios.get(baseURL);
    const latestVersion: string =
      versionResponse.data.data.relationships.versions.data[0].id;
    console.log(`Latest Version for ${entity}: ${latestVersion}`);

    // Step 2: Get all vertices for the latest version
    const verticesURL = `${baseURL}/${latestVersion}`;
    const verticesResponse = await axios.get(verticesURL);

    // Extracting vertices
    const vertices = verticesResponse.data.data.relationships.vertices.data;
    const verticesArray: string[] = vertices.map((vertex: any) => vertex.id);
    console.log(`Vertices for ${entity}:`, verticesArray);

    // Step 3: Get details for each vertex
    const vertexDetailsPromises = verticesArray.map(
      async (vertexId: string) => {
        const vertexDetailURL = `${verticesURL}/vertices/${vertexId}`;
        const vertexDetailResponse = await axios.get(vertexDetailURL);
        return { name: entity, ...vertexDetailResponse.data } as VertexDetail;
      }
    );

    const vertexDetails = await Promise.all(vertexDetailsPromises);
    console.log(`Vertex Details for ${entity}:`, vertexDetails);

    return vertexDetails;
  } catch (error) {
    console.error(`Error fetching vertices for ${entity}:`, error);
    return [];
  }
}

async function fetchAllVertices() {
  const allVertices = [];

  for (const entity of entityTypes) {
    const vertexDetails = await fetchVerticesForEntity(entity);
    allVertices.push(vertexDetails);
  }

  console.log("All Vertices:", allVertices);
  fs.writeFileSync(
    "vertices.json",
    JSON.stringify(allVertices.flat(), null, 2)
  );
  return allVertices;
}

exports = { fetchAllVertices };

