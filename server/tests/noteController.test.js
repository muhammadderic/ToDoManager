const request = require("supertest");
const app = require("../app");
const { connect, connection } = require("mongoose");
const { reqAddTask, updatedTask } = require("../utils/task.test.data");

require("dotenv").config();

beforeEach(async () => {
  await connect(process.env.MONGODB_URI);
})

afterEach(async () => {
  await connection.close();
})

// Create a new task test
describe("POST /api/v1/tasks", () => {
  it("should create a new task", async () => {
    const res = await request(app)
      .post("/api/v1/tasks")
      .send(reqAddTask);
    expect(res.statusCode).toBe(201);
  })
})

// Get all tasks test
let id = undefined;
describe("GET /api/v1/tasks", () => {
  it("should get all tasks", async () => {
    const res = await request(app)
      .get("/api/v1/tasks");
    id = res._body[0]._id;
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  })
})

// Get a task test
describe("GET /api/v1/tasks/:id", () => {
  it("should get a task", async () => {
    const res = await request(app)
      .get(`/api/v1/tasks/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res._body.title).toBe(reqAddTask.title);
    expect(res._body.description).toBe(reqAddTask.description);
    expect(res._body.dueDate).toBe(reqAddTask.dueDate);
    expect(res._body.priority).toBe(reqAddTask.priority);
  })
})

// Update a task test
describe("PUT /api/v1/tasks/:id", () => {
  it("should update a task", async () => {
    const res = await request(app)
      .put(`/api/v1/tasks/${id}`)
      .send(updatedTask);
    expect(res.statusCode).toBe(200);
    expect(res._body.title).toBe(updatedTask.title);
    expect(res._body.description).toBe(updatedTask.description);
    expect(res._body.dueDate).toBe(updatedTask.dueDate);
    expect(res._body.priority).toBe(updatedTask.priority);
  })
})

// Delete a task test
describe("DELETE /api/v1/tasks/:id", () => {
  it("should delete a task", async () => {
    const res = await request(app)
      .delete(`/api/v1/tasks/${id}`);
    expect(res.statusCode).toBe(200);
  })
})