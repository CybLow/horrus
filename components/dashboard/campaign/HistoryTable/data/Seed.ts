import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

const tasks = Array.from({ length: 100 }, () => ({
    id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
    title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
}))

fs.writeFileSync(
    path.join(__dirname, "Tasks.json"),
    JSON.stringify(tasks, null, 2)
)

console.log("✅ Tasks data generated.")