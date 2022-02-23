# week4

因此要把原本包住 `<modal-for-prod>` 元件標籤的外層 `<div class="modal fade ...略>"` 移到[元件 template 內](https://github.com/elaineliu7598/Vue-Live/blob/91671a52f3658572fa1a8fdb8f74b68444f2e7d3/question/w4/products.html#L99)並加上 `ref` 屬性。
▲實作：
```htmlembedded
<modal-for-prod ref="prodModal" :temp-prod="tempProd" @get-prod="getProds" :is-new="isNew"></modal-for-prod>

<script type="text/x-template" id="prodModalTemplate" >
    <div ref="prodModal" class="modal fade" id="prodModal" ...略>
        <div  class="modal-dialog modal-xl modal-dialog-scrollable">
	下略....