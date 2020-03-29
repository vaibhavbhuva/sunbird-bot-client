export interface ChatRequest {
    // User message
    Body: string;

    // session id (uuid or some Session/ User identifier)
    From: string;
}