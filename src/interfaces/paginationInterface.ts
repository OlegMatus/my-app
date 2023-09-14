export interface IPagination<DATA> {
    page: number,
    total_pages: number,
    prev: string,
    next: string,
    results: DATA[]
}