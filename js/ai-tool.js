const aiTools = async (dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data.data);
    displayAiTools(data.data,dataLimit);
}



const displayAiTools= (data,dataLimit) => {
    
    const toolsContainer = document.getElementById('tools-container');
    toolsContainer.textContent = '';
   // display 10 phone only 
     // data.tools = data.tools.slice(0,6);
     //const cardLenght = data.tools;
    const showAll = document.getElementById('show-all')
     if (data.tools.length > 6) {
        data.tools = data.tools.slice(0, 6);
        showAll.classList.remove('d-none');
     }
     else {
        showAll.classList.add('d-none');
     }
   
    // display all tool 
    data.tools.forEach(tool => {
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('col');
        toolDiv.innerHTML = `
        <div style="height:800px;" class="card p-4 ">
                        <img style="height:400px;"  src="${tool.image}" class="card-img-top" alt="...">
                        <div class="card-body ">
                        <h2 class="card-title font-bold text-lg d-block">Featurs</h2>
                        <h5 class="card-title">${tool.features}</h5>
                        <ol id="features-container">

                        </ol>
                        <hr>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h2 class="font-bold text-lg">${tool.name}</h2>
                                <p><i class="fa-solid fa-calendar-days"></i> ${tool.published_in}</p>
                            </div>
                            <div>
                            <button type="button" class="btn btn-light rounded-circle"><i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                            
                        </div>
                    </div>
        `;
        toolsContainer.appendChild(toolDiv);

        

        
    });
     toggleSpinner(false);

}




/*
const displayAiTools= (data) => {
    const toolsContainer = document.getElementById('tools-container');
    console.log(data);
    // display all tool 
    data.tools.forEach(tool => {
        console.log(tool);
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('col');
        toolDiv.innerHTML = `
        <div class="card p-4">
                        <img  src="${tool.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        
                        <ol id="features-container">
                            <li>${""}</li>
                        </ol>
                        <hr>
                        <div>
                            <h1 class="font-bold text-lg">${tool.name}</h>
                            <p><i class="fa-solid fa-calendar-days"></i>${tool.published_in}</p>
                        </div>
                            
                        </div>
                    </div>
        `;
        toolsContainer.appendChild(toolDiv);

        const features = tool.features;
        console.log(features.length);

         //for (const [key, value]  of Object.entries(features))
         for(const i=0; i<Object.entries(features.length);i++)
         {
         const featuresContainer = document.getElementById('features-container');
         const featuresElement = document.createElement('li');
         featuresElement.innerHTML = `
         <li>${features[i]}</li>
             `;
            //  <li>${key}, ${value}</li>
         featuresContainer.appendChild(featuresElement);
         }
    });
}
*/

const processSearch = (dataLimit) => {
    toggleSpinner(true);
    
    aiTools(dataLimit);
}

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }
}

document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
    console.log('show all')
})
aiTools();
