        const addButton = document.querySelector('#add');
    const updateLSData = () => {
        const textAreadata = document.querySelectorAll('textarea');
        const notes = [];
        
        textAreadata.forEach((note) => {
            return notes.push(note.value);
        })
        

        localStorage.setItem('notes', JSON.stringify(notes));
    }
        const addNewNote = (text = '') => {
            const note = document.createElement('div');
            note.classList.add('note');

            const htmlData = `
                <div class="operation">
                    <button type="button" class="edit">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m21.79 1.482.59.59c.812.814.69 2.257-.278 3.223L9.935 17.462l-3.942 1.442c-.495.182-.977-.054-1.075-.525a.928.928 0 0 1 .045-.51l1.47-3.976L18.566 1.76c.967-.966 2.41-1.09 3.223-.276ZM9.403 2.692a1 1 0 0 1 0 2h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a1 1 0 0 1 2 0v4a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h4Z"></path>
</svg>Edit</button>
                    <button type="button" class="delete">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 4h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1Zm3.8 6-.613 9.2a3 3 0 0 1-2.993 2.8H8.826a3 3 0 0 1-2.993-2.796L5.205 10H18.8ZM10 11a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1Zm4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Z"></path>
</svg> Delete</button>
                </div>
                <div class="main" ${text ? "" : "hidden"} "></div>
                <textarea placeholder="
    Express Your Thoughts:
Craft a clear and compelling paragraph on the topic of your choice. Use this space to share your insights, ideas, or reflections
    " class="${text ? "hidden" : ""}"></textarea>
            `;

            note.insertAdjacentHTML('afterbegin', htmlData);
            
            // button Refrences
            const editbtn = note.querySelector('.edit');
            const deltbtn = note.querySelector('.delete');
            const maindiv = note.querySelector('.main');
            const textArea = note.querySelector('textarea');

            // deletenode
            deltbtn.addEventListener('click', () => {
                note.remove();
                updateLSData();
            })

            // toggle for edit

            textArea.value = text;
            maindiv.innerHTML = text;

            editbtn.addEventListener('click', () => {
                maindiv.classList.toggle('hidden');
                textArea.classList.toggle('hidden');
            })

            textArea.addEventListener('change', (event) => {
                const value = event.target.value;
                maindiv.innerHTML = value;
                
                updateLSData();
            })



            document.body.appendChild(note);
        }


        // Get Back data from local storage 😁
        const notes = JSON.parse(localStorage.getItem('notes'));
        
if(notes){ notes.forEach((note) => addNewNote(note))};


        addButton.addEventListener('click', () => addNewNote() );