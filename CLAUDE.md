@AGENTS.md

## Architecture

- Frontend: ใช้ Tailwind utility classes ห้าม inline style ห้าม CSS modules
- Components: สร้าง Function Components ห้าม Class Components
- Query: ใช้ Tanstack Query

## Conventions

- TypeScript strict mode ทุกที่
- ห้ามใช้ `any` type
- ห้ามใส่ comments ถ้าไม่ได้สั่ง โค้ดต้องอธิบายตัวเองด้วยชื่อตัวแปรและฟังก์ชันที่ชัดเจน
- `camelCase` variables/function, `PascalCase` types/Class, `kebab-case` files
- Indentation 2 spaces
- แก้ไข Project Structure ใน README.md ทุกครั้งที่มีการเปลี่ยนแปลง

## Workflow

- ต้อง verify build ผ่านก่อน commit ทุกครั้ง
- Commit message ใช้ conventional commits (ภาษาอังกฤษ)
- Conventional commits: feat:, fix:, refactor:, test:, chore: