import TaskCard from "./TaskCard";
function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-2">Smarter Tasks</h1>
      <p className="text-gray-600 mb-6">
        <strong>Project:</strong> Graduation Final Year Project (Revamp College
        Website)
      </p>
      <div className="flex gap-8">
        <div className="bg-gray-50 rounded-lg border p-4 w-72">
          <h1 className="text-lg font-bold text-center mb-4">Pending</h1>
          <TaskCard
            task="Pending"
            title="Build website"
            dueDate="17th"
            assigneeName="Alice"
          />
          <TaskCard
            task="Pending"
            title="Fix bugs"
            dueDate="18th"
            assigneeName="Bob"
          />
          <button className="w-full mt-2 bg-gray-300 hover:bg-gray-200 text-gray-600 py-2 rounded-md">
            + New Task
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg border p-4 w-72">
          <h1 className="text-lg font-bold text-center mb-4">Done</h1>
          <TaskCard
            task="done"
            title="Update documentation"
            dueDate="15th"
            completedAtDate="15th"
            assigneeName="Charlie"
          />
          <TaskCard
            task="done"
            title="Deploy to production"
            dueDate="16th"
            completedAtDate="15th"
            assigneeName="Dave"
          />
        </div>
      </div>
    </div>
  );
}
export default App;
