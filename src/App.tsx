import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen gap-8 font-Inter cursor-default">
      <h1 className="text-2xl font-bold">Weekly Calendar</h1>
      <Calendar />
    </div>
  );
}

export default App;
