npm init -y
npm install react@latest next@latest react-dom@latest

package.json 파일에서
  "scripts": {
    "dev": "next dev"
  },
dev를 위와 같이 변경

npm run dev로 시작

- /: This page
- /movies : List popular movies
- /movies/:id : Get Movie by :id
- /movies/:id/credits: Get credits for a movie by :id
- /movies/:id/videos : Get vodios for a movie by :id
- /movies/:id/providers: Get providers for a movie by :id
- /movies/:id/similar : Get similar movies for a movie by :id