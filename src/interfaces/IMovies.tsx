export interface IMovieInfo {
    "original_title" : string,
    "poster_path" : string,
    "title" : string,
    "overview" : string,
    "id" : number
}

export interface IMovieDataResponse {
    data: IMovieInfo[],
    hasNextPage: boolean,
    loadingData: boolean,
    fetchNextSetOfData: () => void
}