import './App.css';
import PriceCard from './PriceCard';



function App() {

  let data=[
    {
      plan:"Free",
      price:"0",
      user:"Single User",
      isUser:true,
      storage:"5GB storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:false,
      phone:"Dedicated Phone Support",
      isPhone:false,
      privatedomain:"Free subdomain",
      isPrivatedomain:false,
      statusreports:"Monthly Status Reports",
      isStatusreports:false
    },
    {
      plan:"Plus",
      price:"9",
      user:"5 users",
      isUser:true,
      storage:"50GB storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      phone:"Dedicated Phone Support",
      isPhone:true,
      privatedomain:"Free subdomain",
      isPrivatedomain:true,
      statusreports:"Monthly Status Reports",
      isStatusreports:false
    },
    {
      plan:"Pro",
      price:"49",
      user:"Unlimited Users",
      isUser:true,
      storage:"150GB storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      phone:"Dedicated Phone Support",
      isPhone:true,
      privatedomain:"Unlimited Free Subdomains",
      isPrivatedomain:true,
      statusreports:"Monthly Status Reports",
      isStatusreports:true
    }
  ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">      
      {
data.map((e)=>{ 
return <PriceCard data={e}/>
      })
      }
    
 
    </div>
  </div>
</section>
  </>
}

export default App;
