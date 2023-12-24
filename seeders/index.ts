import { watchesSeed } from "./Watchs"
import { brandsSeed } from "./brands"
import { collectionsSeed } from "./collections"

export const seeders = async () => {
    await collectionsSeed()
    await brandsSeed()
    await watchesSeed()
}