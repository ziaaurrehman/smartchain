import {Helmet} from "react-helmet";
export default function Pagewrapper({title,children}){
  return(
    <>
      <Helmet>
        <title>{title || "Xmoze - SaaS Multipurpose Landing Template"}</title>
      </Helmet>
      {children}
    </>
  )
} 