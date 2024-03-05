import Image from "next/image";
import Search from "./components/search";
async function Get(){
  let ans = await fetch('https://rappid.in/apis/train.php?train_no=12654');
  if(!ans.ok){
    throw Error("Failed to fetch")
  }
  return ans.json()
}

export default async function Home() {
  const data  = await Get()
  // console.log(data)

  return (
    <>
      <Search/>
    </>
  );
}
