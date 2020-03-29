export interface ChatRequest {
    // User message
    body: string;

    // session id (uuid or some Session/ User identifier)
    from: string;
}
