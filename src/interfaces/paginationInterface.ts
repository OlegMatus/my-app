export interface IPagination<DATA> {
    pages: number,
    total_pages: number,
    prev: string,
    next: string,
    results: [DATA]
}