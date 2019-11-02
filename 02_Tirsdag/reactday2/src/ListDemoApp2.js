import React, {useState} from "react";
import './App.css';

function MemberTable({ members }) {
  const listMembers = members.map((member, i) =>
  
  <MemberList key={i} member={member}/>);
  return (
    <table>
      <thead></thead>
      {listMembers}
    </table>
  );
}

function MemberList(props) {
    return <li>Age:{props.member.age} Name: {props.member.name}</li>;
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members}/>
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}
