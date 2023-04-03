# Would You Web

The official repository for the website [wouldyoubot.com](https://wouldyoubot.com).

## Quick Links
- [Contribution Guide](#contribution-guide)
  - [Commit Title Schema](#commit-title-schema)
    - [Areas](#areas)
- [Contributors](#contributors)

## Contribute Guide
1. Pull the newest version from the repository
2. Run 
```bash
npm install
```
3. Start up the project
3.1 Development Server
```bash
npm run dev
```
3.2 SCSS Compiler
```bash
npx gulp
```
4. Make changes
5. Create a commit with a descriptive title & detailed description
6. Push the commit to a new dev branch (as example: dev-17) or your local fork
7. Open a pull request
Done!

### Commit Title Schema
- fix(area*): Title (Bugfixes)
- feat(area*): Title (New Features)
- impr(area*): Title (Improvement or small changes)

The area field is optional but recommended. Select the most applicable field from the list below.

#### Areas
- Core
- Auth
- Packs
- Home
- Nav
- Footer

You can also use a custom area if that would be the best option for your commit. 

## Contributors
![image](https://contrib.rocks/image?repo=marcwebdev/would-you-web)