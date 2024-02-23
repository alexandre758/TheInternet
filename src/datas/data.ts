




export namespace Data {
    export type Book = {
        author?: string | string,
        title?: string | string,
        year?: number | string
        isSelected?: boolean | boolean
    }
    export namespace book {
        export const Hamlet: Book = {
            author: 'William Shakespeare',
            title: 'Hamlet',
            year: 1232,
            isSelected: true
        }

        export const SearchOfLostTime: Book = {
            author: 'Marcel Proust',
            title: 'Search of Lost Time',
            year: 1879,
            isSelected: false
        }
    }
}