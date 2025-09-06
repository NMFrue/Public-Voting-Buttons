<template>
  <div class="content-box-wrapper">
<div class="CON-contentBox CON-statement">
  
	<div class="CON-header">
		 Name
	</div>
	
	
    <div class="parent-container"> 
        <div class="child-container"> 
            <span class="bottom-corner">
              <div class="CON-info">
                <a href=""><button>∞</button></a>
              </div>
              <div class="CON-info">
                <a><button class="extra-button"><overlapping-emojis></overlapping-emojis></button></a>
              </div>
						</span>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa sed voluptatem illum nostrum? A, harum cupiditate? 
                Officiis, earum autem officia voluptates rerum deserunt
                 nisi tenetur, temporibus iure consequuntur possimus molestiae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa sed voluptatem illum nostrum? A, harum cupiditate?
            </p> 
        </div> 
    </div> 
		
		
		

	<div class="main-wrapper">

		<span class="main">
			<button class="negative" type="submit" name="score" value=-4 @click="handleVote">-4</button>
      <button class="negative" type="submit" name="score" value=-3 @click="handleVote">-3</button>
			<button class="negative" type="submit" name="score" value=-2 @click="handleVote">-2</button>
			<button class="negative" type="submit" name="score" value=-1 @click="handleVote">-1</button>
			<button class="positive" type="submit" name="score" value=+1 @click="handleVote">+1</button>
			<button class="positive" type="submit" name="score" value=+2 @click="handleVote">+2</button>
			<button class="positive" type="submit" name="score" value=+3 @click="handleVote">+3</button>
			<button class="positive" type="submit" name="score" value=+4 @click="handleVote">+4</button>
		</span>
	</div>


</div>
</div>
</template>






<script>
import { useDropdownStore } from "@/stores/dropdownStore";

export default {
  methods: {
    handleVote(event) {
      this.answererVisible = true;
      const button = event.target;
      let content = "Button pressed "+button.value;

      const dropdownStore = useDropdownStore();    
      dropdownStore.addMessage(content, 4000);
    },  
  }
}
</script>




<style scoped lang="scss">


.extra-button-img {
  max-width: 2rem;
  max-height: 2rem;
}
    
button.negative {
    border: 2px solid #ff0000;
}

button.positive {
    border: 2px solid #00ff00;
}

button.MORE-zero-null {
    border: 2px solid #cccccc;
}

button.MORE-zero-null.selected {
    background-color: #cccccc;
}

button.negative.selected {
    background-color: #ff0000;
}

button.positive.selected {
    background-color: #00ff00;
}






.content-box-wrapper {
	width: 100%;
	box-sizing: border-box;
	padding: 5px;
}


.CON-Container {
	margin-left: auto;
	margin-right: auto;
	margin-top: 0;
	width: 100%;
	box-sizing: border-box;
}

.CON-statement {
  margin-top: 1em;
	margin-left: auto;
	margin-right: auto;
	
  width: 100%;
  border: 1px solid var(--General-highlight-Color);
	box-sizing: border-box;
		
	.CON-header {
		position: relative;
		text-align: left;
		padding: 10px 10px;
	}
	
	.parent-container {
		 display: flex;
		 
		 .child-container {
		 	width: 100%;
		
			.bottom-corner {
				float: right;
				height: 100%;
				display: flex;
				align-items: flex-end;
				shape-outside: inset(calc(100% - 3rem) 0 0);

				button {
					width: 3rem;
					height: 3rem;

					border: 2px solid black;
					text-align: center;
					text-decoration: none;
					font-size: 1rem;
					border-radius: 8px;

					margin-left: 1px;
					margin-right: 1px;
				}
			} 
	  }
	} 
}




.main-wrapper {

	width: 100%;
	//max-width: 37rem;
	margin: auto;
	//border: 1px solid #c3c3c3;
	align-items: center;
	justify-content: center;
	display: flex;
	
	padding-top: 10px;
  padding-bottom: 10px;
	
	.main {
		max-width: 100%;
		display: inline-flex;

		button {
			width: 3rem;
			height: 3rem;

			//border: 1px solid black;
			text-align: center;
			text-decoration: none;
			font-size: 1rem;
			border-radius: 8px;
			//margin-left: calc((100vw - 3rem*8)/32);
			//margin-right: calc((100vw - 3rem*8)/32);
			margin-left: 1px;
			margin-right: 1px;
			
		}
	}
}


</style>