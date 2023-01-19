import logo from './logo.svg';
import './App.css';
import NavbarComp from './components/NavbarComp';
import Card from './components/Card';
function App() {
  return (
    <>
      <NavbarComp/>
      <Card title="Shri Narendra Modi" desc="Prime Minister Of India" button="Learn More" imgUrl="https://upload.wikimedia.org/wikipedia/commons/8/80/PM_at_First_Meeting_of_Central_Asia_Summit.jpg"/>
      <Card title="Shri Amit Shah" desc="Ministry of Home Affairs" button="Learn More" imgUrl="https://businessdunia.in/wp-content/uploads/2022/03/amit-shah-at-scz-meet.jpg"/>
      <Card title="Shri Rajnath Singh" desc="Ministry of Defence" button="Learn More" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEavVBue5pu6zvslMZw3_ISbYZeUntVOzztqVNcQiyjTtAty5ID6P9NBuQkhq7onhJNdY&usqp=CAU"/>
    </>
  );
}

export default App;
