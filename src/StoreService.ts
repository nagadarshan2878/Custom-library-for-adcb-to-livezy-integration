export class StoreService {
    private token: string;
  
    constructor() {
      this.token = "12345-ABCDE"; // Simulated token
    }
  
    // Fetch session token
    getToken(): string {
      return this.token;
    }
  
    // Fetch user data
    getUserData(): Record<string, string> {
      return { id: "1", name: "John Doe", role: "Admin" };
    }
  }
  