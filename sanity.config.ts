import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "ly1bgyjh",
    dataset: "production",
    title: "My personal webiste",
    apiVersion: "2023-05-15",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
});



export default config