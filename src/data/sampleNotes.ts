import type { Note } from "../types";

export const sampleNotes: Note[] = [
  {
    id: "sample-1",
    title: "The spacing effect",
    content:
      "Learning improves when study sessions are spaced over time instead of " +
      "crammed into one session.",
    tags: ["learning", "memory"],
    createdAt: "2026-11-12T00:00:00.000Z",
    updatedAt: "2026-11-12T00:00:00.000Z",
  },
  {
    id: "sample-2",
    title: "HTTP request lifecycle",
    content:
      "A browser sends a request to a server, the server processes it, and the " +
      "response returns with a status code, headers, and an optional body.",
    tags: ["web", "cse-310"],
    createdAt: "2026-11-12T01:00:00.000Z",
    updatedAt: "2026-11-12T01:00:00.000Z",
  },
  {
    id: "sample-3",
    title: "Normalization in databases",
    content:
      "Normalization organizes related data into separate tables to reduce " +
      "duplication and prevent update, insert, and delete anomalies.",
    tags: ["databases", "design"],
    createdAt: "2026-11-12T02:00:00.000Z",
    updatedAt: "2026-11-12T02:00:00.000Z",
  },
  {
    id: "sample-4",
    title: "The water cycle",
    content:
      "Water moves through evaporation, condensation, precipitation, collection, " +
      "and runoff; solar energy drives most of the cycle.",
    tags: ["earth science"],
    createdAt: "2026-11-12T03:00:00.000Z",
    updatedAt: "2026-11-12T03:00:00.000Z",
  },
  {
    id: "sample-5",
    title: "Planning a difficult task",
    content:
      "Break a difficult task into a visible next action, estimate its effort, and " +
      "review the result before choosing the next action.",
    tags: ["productivity", "planning"],
    createdAt: "2026-11-12T04:00:00.000Z",
    updatedAt: "2026-11-12T04:00:00.000Z",
  },
];
