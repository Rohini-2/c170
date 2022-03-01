AFRAME.registerComponent("create-markers", {
     init: async function(){
       var mainSence=document.querySelector("#main-sence");
       var dishes=await this.getDishes();
         dishes.map(dish=>{
          var marker=document.createElement("a-marker");
          marker.setyAttribute("id",dish.id);
          marker.setAttribute("type",pattren);
          marker.setAttribute("url",dish.marker_pattern_url);
          marker.setAttribute("curser",rayOrigin:"mouse");
         });
         marker.setAttribute("marker-handler",{});
         mainSence.appendChild(marker);
     }
  
  //Add Code Here!
  getDishes:async function(){
    return await firebase
    .firestor()
    .collection("dishes")
    .get()
    .then(snap=>{
      return snap.docs.map(doc.data());
    });
  }
  });
