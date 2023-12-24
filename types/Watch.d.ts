interface Watch {
    id: string
    name: string
    img: number
    price: number
    oldPrice: number | null
    isNew: boolean
    onSale: boolean
    stars: number
    inStock: boolean
    onlineOnly: boolean
    brandId: string
    collectionId: string
}