export interface DocSchema extends Document {
    contentType: string,
    url: string,
    pageScore: number,
    vote: number,
    selector: string,
    users: string[]
}
