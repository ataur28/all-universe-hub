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

    });
    toggleSpinner(false);

}


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
   // console.log('show all')
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
                                    <p id="published-in"><i class="fa-solid fa-calendar-days"></i> ${tool.published_in}</p>
                                </div>
                                <div>
                                <button id="arrow-button" onclick="loadtoolDetails('${tool.id}')" type="button" class="btn btn-light rounded-circle" data-bs-toggle="modal" data-bs-target="#toolDetailModal"><i class="fa-solid fa-arrow-right"></i></button>
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

const loadtoolDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data.data);
    
    displaytoolDetails(data.data);

}

const accuracyBtn = accuracyValue => {
    const loaderSection = document.getElementById('accuracy-btn');
    if (accuracyValue != 'null') {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }
}



const displaytoolDetails = tool =>{
    console.log(tool);
    const toolDetails = document.getElementById('tool-details');
    //const features = `${tool.features.map(feature => `<li>${feature}</li>`).join("")}`
    toolDetails.innerHTML=`
    <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                  <div class="card">
                                    <div class="card-body bg-body-tertiary">
                                      <p class="card-text">${tool.description}</p>
                                      <div class="m-1 p-1 gap-3 d-flex justify-content-between align-items-center">
                                            <div class="bg-warning-subtle p-3 ">
                                                <p>${
                                                    tool.pricing[0].price == '0' 
                                                    ? tool.pricing[0].price = "Free of cost/"
                                                    : tool.pricing[0].price
                                                }<br>
                                                ${
                                                    tool.pricing[0].plan = "Free" 
                                                    ? tool.pricing[0].plan = "Basic"
                                                    : tool.pricing[0].plan
                                                }</p>
                                            </div>
                                            <div class="bg-warning-subtle p-3">
                                                <p>${
                                                    tool.pricing[1].price 
                                                }<br>
                                                ${
                                                    tool.pricing[1].plan 
                                                }</p>
                                            </div>
                                            <div class="bg-warning-subtle p-3">
                                                <p>${
                                                    tool.pricing[2].price
                                                }<br>
                                                ${
                                                    tool.pricing[2].plan 
                                                }</p>
                                            </div>
                                      </div>
                                      <div class=" mt-3 m-1 p-1 gap-3 d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 class="card-title font-bold text-lg d-block">Featurs</h4>
                                            <ul id="feature-container">
                                            <li>${tool.features[1].feature_name? tool.features[1].feature_name  : "" }</li>
                                            <li>${tool.features[2].feature_name ? tool.features[2].feature_name : "" }</li>
                                            <li>${tool.features[3].feature_name ? tool.features[3].feature_name : "" }</li>
                                            </ul>
                                            
                                            
                                            
                                            
                                        </div>
                                        <div>
                                            <h4 class="card-title font-bold text-lg d-block">Integration</h4>
                                            <p>${tool.integrations.map(integration => `<li>${integration}</li>`).join("")}<p>
                                        </div>
                                        
                                  </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="card">
                                    <div class="position-relative">
                                        <img src="${tool.image_link[0]}" class="card-img-top" alt="...">
                                        <button id="accuracy-btn" type="button" class="btn btn-success rounded-4 position-absolute top-0 end-0 d-none">${tool.accuracy.score ? tool.accuracy.score : "No"} accuracy</button>
                                    </div>
                                    <div class="card-body">
                                      <h5 class="card-title text-center">${tool.input_output_examples[0].input}</h5>
                                      <p class="card-text text-center">${tool.input_output_examples[0].output ? tool.input_output_examples[0].output : "No! Not Yet! Take a break!!!"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
    `;
    const acc = accuracyBtn(tool.accuracy.score);
    const feature = tool.features;
    // for (const value of Object.entries(feature)){
    //     const featureContainer = document.getElementById('feature-container');
    //     const featureElement = document.createComment('li');
    //     featureElement.innerHTML = `<li>${value} </li>`;
    //     featureContainer.appendChild(featureElement);

    // }
    // for (const property in tool.features) {
    //      const featureContainer = document.getElementById('feature-container');
    //     const featureElement = document.createComment('li');
    //     featureElement.innerHTML = `<li>${value} </li>`;
    //     featureContainer.appendChild(featureElement);
    //    }
    // console.log(text);
}




// // sorting part 

// const sorting = (a,b)=>{
//     const dateA = new Date(a.published_in);
//     const dateB = new Date(b.published_in);
//     if(dateA>dateB){
//         return 1;
//     }
//     else if(dateA<dateB){
//         return -1;
//     }
//     else{
//         return 0;
//     }
// }

// document.getElementById('sorting-data').addEventListener('click',function(){
//     displaytoolDetails(data.data);

//     const publishedDate = document.getElementById('published-in');
//     const publishedValustring = publishedDate.nnerText;
//     console.log(publishedValustring);
    
// })
//aiDetails();
aiTools();
