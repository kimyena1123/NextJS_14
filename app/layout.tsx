import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/global.css";

//꼭 내보내야 하는 object
export const metadata :Metadata= {
  title:{
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: 'The best movies on the best framework',
}

export default function Layout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

{/* <Layout>
  <AboutUsLayout>
    <SalesLayout>
      <Sales />
    </SalesLayout>
  </AboutUsLayout>
</Layout> */}