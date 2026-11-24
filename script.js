const students = [
  "Aarav Sharma",
  "Priya Patel",
  "Rahul Verma",
  "Sneha Singh",
  "Aditya Gupta"
];

const studentList = document.getElementById("studentList");

students.forEach(function(name, index) {
  const row = document.createElement("div");
  row.className = "student";

  const label = document.createElement("label");
  label.textContent = (index + 1) + ". " + name;
  label.htmlFor = "status" + index;

  const select = document.createElement("select");
  select.id = "status" + index;
  select.innerHTML = `
    <option value="Present">Present</option>
    <option value="Absent">Absent</option>
  `;

  row.appendChild(label);
  row.appendChild(select);
  studentList.appendChild(row);
});

function updateSummary() {
  let presentCount = 0;

  students.forEach(function(name, index) {
    const status = document.getElementById("status" + index).value;
    if (status === "Present") {
      presentCount++;
    }
  });

  const totalCount = students.length;
  const absentCount = totalCount - presentCount;
  const percentage = (presentCount / totalCount) * 100;

  document.getElementById("total").textContent = totalCount;
  document.getElementById("present").textContent = presentCount;
  document.getElementById("absent").textContent = absentCount;
  document.getElementById("percentage").textContent =
    percentage.toFixed(1) + "%";
}

document.getElementById("updateBtn").addEventListener("click", updateSummary);
updateSummary();
