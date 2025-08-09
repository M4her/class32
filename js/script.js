
    let  studentForm = document.getElementById('studentForm')
    let studentList = document.getElementById('studentList')
    let button     = document.querySelector('button')

     const handleButton = () => {

        let studentName = document.getElementById('studentName').value;
        let roll = document.getElementById('roll').value;
        let id = document.getElementById('id').value;
        let studentClass = document.getElementById('class').value;
        let age = document.getElementById('age').value;

        //  student list create
        let newStudentItem = document.createElement('li');
        newStudentItem.innerHTML = `
            ${studentList.children.length + 1}. ${studentName} <br>
            Roll: ${roll} <br>
            id: ${id} <br>
            Class: ${studentClass} <br>
            Age: ${age} <br>
            Present: Yes
        `;

        studentList.appendChild(newStudentItem);

        // clear field
        studentForm.reset();
    };
