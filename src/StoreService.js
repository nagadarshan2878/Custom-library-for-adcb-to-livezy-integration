"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
class StoreService {
    constructor() {
        this.token = "12345-ABCDE"; // Simulated token
    }
    // Fetch session token
    getToken() {
        return this.token;
    }
    // Fetch user data
    getUserData() {
        return { id: "1", name: "John Doe", role: "Admin" };
    }
}
exports.StoreService = StoreService;
