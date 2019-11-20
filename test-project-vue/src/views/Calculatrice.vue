<template>
    <div id="div-calculatrice">
        <input type="text" id="txt-Result-Calculator" class="txt-Result-Calculator" disabled>
        <div id="div-column-Calculatrice">
            <div id="div-first-column-Calculatrice"> 
                <div id="div-first-row-operation-Calculatrice">
                    <input type="submit" value="CE" class="btn-numbers btn-calculator">
                    <input type="submit" value="C" class="btn-numbers btn-calculator">
                    <input type="submit" value="⟵" class="btn-numbers btn-calculator">
                </div>
                <div id="div-numbers-calculatrice">
                    <div id="div-first-row-Numbers-Calculatrice">
                        <input type="submit" value="1" class="btn-numbers btn-calculator" v-on:click="showNumber">
                        <input type="submit" value="2" class="btn-numbers btn-calculator" v-on:click="showNumber">
                        <input type="submit" value="3" class="btn-numbers btn-calculator" v-on:click="showNumber">
                    </div>
                    <div id="div-second-row-Numbers-Calculatrice">
                        <input type="submit" value="4" class="btn-numbers btn-calculator" v-on:click="showNumber">
                        <input type="submit" value="5" class="btn-numbers btn-calculator" v-on:click="showNumber">
                        <input type="submit" value="6" class="btn-numbers btn-calculator" v-on:click="showNumber">
                    </div>
                    <div id="div-third-row-Numbers-Calculatrice">
                        <input type="submit" value="7" class="btn-numbers btn-calculator" v-on:click="showNumber">
                        <input type="submit" value="8" class="btn-numbers btn-calculator" v-on:click="showNumber">
                        <input type="submit" value="9" class="btn-numbers btn-calculator" v-on:click="showNumber">
                    </div>
                    <div id="div-third-row-Numbers-Calculatrice">
                        <input type="submit" value="(" class="btn-numbers btn-calculator" v-on:click="showNumber">
                        <input type="submit" value="0" class="btn-numbers btn-calculator" v-on:click="showNumber">
                        <input type="submit" value=")" class="btn-numbers btn-calculator" v-on:click="showNumber">
                    </div>
                </div>
            </div>
            <div id="div-second-column-Calculatrice">
                <div id="div-second-row-operation-Calculatrice">
                    <input type="submit" value="/" class="btn-divise btn-calculator btn-operation" v-on:click="showNumber">
                    <input type="submit" value="x" class="btn-multiply btn-calculator btn-operation" v-on:click="showNumber">
                    <input type="submit" value="-" class="btn-substract btn-calculator btn-operation" v-on:click="showNumber">
                    <input type="submit" value="+" class="btn-add btn-calculator btn-operation" v-on:click="showNumber">
                    <input type="submit" value="=" class="btn-equal btn-calculator btn-submit" v-on:click="submitOperation">
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
import DateFact from "@/components/Date.vue";
import {AjaxAPI} from "@/JS/Ajax.js";
import {CalculatriceJS} from "@/JS/Calculatrice.js";

const API = new AjaxAPI();
const Calculatrice = new CalculatriceJS();

export default {
    name: "calculatrice",
    methods: {
    showNumber: function(event){
        const eltResult =  document.getElementById("txt-Result-Calculator");
        eltResult.value = eltResult.value + event.target.value;
    },
    submitOperation: function(){
        let result =  document.getElementById("txt-Result-Calculator").value.replace(" ","");
        Calculatrice.calculate(result);
    }
  }
}
</script>

<style lang="scss">
    #div-calculatrice{
        width: 15%;
        border: black 2px solid;
        margin: 0 auto;
    }

    #div-second-row-operation-Calculatrice{
        display: flex;
        flex-direction: column;
    }

    #div-column-Calculatrice{
        display: flex;
        flex-direction: row;
    }

    #txt-Result-Calculator{
        width: 98%;
        text-align: right;
    }

    #div-first-column-Calculatrice{
        width: 75%;
    }

    #div-second-column-Calculatrice{
        width: 25%;
    }
    
    #div-numbers-calculatrice{
        display: flex;
        flex-direction: column;
    }

    .btn-numbers{
        width: 33%;
    }
</style>
