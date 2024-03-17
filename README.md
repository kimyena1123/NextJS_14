npm init -y
npm install react@latest next@latest react-dom@latest

//typescript 설치
npm install --save-dev typescript

package.json 파일에서
  "scripts": {
    "dev": "next dev"
  },
dev를 위와 같이 변경

npm run dev로 시작

https://nomad-movies.nomadcoders.workers.dev/

- /: This page
- /movies : List popular movies
- /movies/:id : Get Movie by :id
- /movies/:id/credits: Get credits for a movie by :id
- /movies/:id/videos : Get vodios for a movie by :id
- /movies/:id/providers: Get providers for a movie by :id
- /movies/:id/similar : Get similar movies for a movie by :id