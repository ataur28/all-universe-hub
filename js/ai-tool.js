const aiTools = async (dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data.data);
    displayAiTools(data.data, dataLimit);
}



const displayAiTools = (data, dataLimit) => {

    const toolsContainer = document.getElementById('tools-container');
    toolsContainer.textContent = '';
    // display 10 tool only 
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
                       
                        <ol>
                            ${tool.features.map(feature => `<li>${feature}</li>`).join("")}
                        </ol>
                        <hr>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h2 class="font-bold text-lg">${tool.name}</h2>
                                <p><i class="fa-solid fa-calendar-days"></i> ${tool.published_in}</p>
                            </div>
                            <div>
                            <button onclick="loadtoolDetails('${tool.id}')" type="button" class="btn btn-light rounded-circle" data-bs-toggle="modal" data-bs-target="#toolDetailModal"><i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                            
                        </div>
                    </div>
        `;
        toolsContainer.appendChild(toolDiv);
        //const featurItems = tool.features.map(feature => feature);
        // const featuresContainer = document.getElementById('features-container');
        // const featuresElement = document.createElement('li');
        // featuresElement.innerHTML = `
        // <ol class="foods-list">
        // ${tool.features.map(feature => `<li>${feature}</li>`).join("")}
        // </ol>
        //      `;
        //      //  <li>${key}, ${value}</li>
        // featuresContainer.appendChild(featuresElement);

    });
    toggleSpinner(false);

}


// second 

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
                        <h1 class="font-bold text-lg">${tool.name}</h>
                        <ol id="features-container">
                            <p>${tool.features[0] ? tool.features[0] : ""}</p>
                            <p>${tool.features[1] ? tool.features[1] : ""}</p>
                            <p>${tool.features[2] ? tool.features[2] : ""}</p>
                            <p>${tool.features[3] ? tool.features[3] : ""}</p>
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

        // const features = tool.features;
        // console.log(features);

        // const items = features.map(feature => feature.features);
        // //console.log(items);

        // //  for (const [key, value]  of Object.entries(features))
        // // // for(const i=0; i<Object.entries(features.length);i++)
        // //  {
        //   const featuresContainer = document.getElementById('features-container');
        //   const featuresElement = document.createElement('li');
        //   featuresElement.innerHTML = `
        //     <li>${items}</li>
        //     `;
        //      //  <li>${key}, ${value}</li>
        //  featuresContainer.appendChild(featuresElement);
         
        // //  }
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
    //processSearch(10);
    console.log('show all')
    const aiTools = async (dataLimit) => {
        const url = `https://openapi.programming-hero.com/api/ai/tools`
        const res = await fetch(url);
        const data = await res.json();
        //console.log(data.data);
        displayAiTools(data.data, dataLimit);
    }



    const displayAiTools = (data, dataLimit) => {

        const toolsContainer = document.getElementById('tools-container');
        toolsContainer.textContent = '';

        const showAll = document.getElementById('show-all')
        if (data.tools.length < 6) {
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
                           
                            <ol>
                            ${tool.features.map(feature => `<li>${feature}</li>`).join("")}
                            </ol>
                            <hr>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 class="font-bold text-lg">${tool.name}</h2>
                                    <p><i class="fa-solid fa-calendar-days"></i> ${tool.published_in}</p>
                                </div>
                                <div>
                                <button type="button" class="btn btn-light rounded-circle" data-bs-toggle="modal" data-bs-target="#toolDetailModal"><i class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                                
                            </div>
                        </div>
            `;
            toolsContainer.appendChild(toolDiv);


        });
        toggleSpinner(false);

    }
    aiTools();
})

// const loadtoolDetails = async id => {
//     const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data.data);
//     console.log(id);
//     //displaytoolDetails(data.data);

// }

const aiDetails = (id) =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displaytoolDetails(data.data));

}

// const name= tool.mainFeatures.sensors.map(sensors => sensors);

const displaytoolDetails = tool =>{
    console.log(tool);
}
//aiDetails();
//loadtoolDetails();
aiTools();
