const Eeu=(e)=>e
const Pai=(e)=>e.parentNode
const Avo=(e)=>e.parentNode.parentNode
const Bzv=(e)=>e.parentNode.parentNode.parentNode
const Ttv=(e)=>e.parentNode.parentNode.parentNode.parentNode
const Vo5=(e)=>e.parentNode.parentNode.parentNode.parentNode.parentNode

//Retornos DOM________________________________________________________________________________________________________________
const     $ = (Stg,e=document)=>(typeof Stg==='string'?e.querySelector(Stg):Stg)
const  $All = (Stg,e=document)=>(typeof Stg==='string'?Array.from(e.querySelectorAll(Stg)):Stg)
const    $$ = (Stg,e=document)=>(typeof Stg==='string'?Array.from(e.querySelectorAll(Stg)):Stg)
const $All2 = (Stg,e=document)=>(typeof Stg==='string'?e.querySelectorAll(Stg):Stg)
const  $Vl  = (Stg,e=document)=>$(Stg,e).value
const  $Val = (Stg,e=document)=>$All(Stg,e).map(e=>e.value)
const  $Inn = (Stg,e=document)=>$All(Stg,e).map(e=>e.innerHTML)
const Inn   = e=>$(e).innerHTML
const Innr  = (e,stg)=>$(e).innerHTML = stg
const Innr_ = (e,stg)=>$(e).innerHTML+= stg

// Ações DOM___________________________________________________________________________________________________________________
const Befor=(e,Stg)=>$(e).insertAdjacentHTML('beforeend' ,Stg)
const After=(e,Stg)=>$(e).insertAdjacentHTML('afterbegin',Stg)
const DltAll=e=>$All(e).forEach(e=>e.remove())
const InnAll=(Stg,e)=>$All(Stg).forEach(E=>E.innerHTML = e)
const NewTag = e=>document.createElement(e)
const NewImg=Src=>Object.assign(new Image(),{src:Src})
const NewDiv=Cls=>Object.assign(NewTag('div'),{className:Cls})

//FuncStorage________________________________________________________________________________________________________________
const StogeGet=e=>localStorage.getItem(e)
const StogeRmv=e=>localStorage.removeItem(e)
const StogeSet=(e,val)=>localStorage.setItem(e,val)

//Retornos de Arrays___________________________________________________________________________________________________________
const Angrm=arr=>arr.length===0?[[]]:arr.flatMap((e,x)=>Angrm([...arr.slice(0,x),...arr.slice(x+1)]).map(i=>[e,...i]))

//Funções de Objeto e Array____________________________________________________________________________________________________
const ObjKey=e=>Object.keys(e)
const For=e=>Array.from({length:e},(_,idx)=>idx)
const Fbj=obj=>For(ObjKey(obj).length)
const IdxDe=e=>Array.from(Pai(e).children).indexOf(e)
const Filh=e=>Array.from($(e).children)

//Funções de Disparar Eventos__________________________________________________________________________________________________
const DisparoInpt = new Event('input',{bubbles:true})
const DispClick=e=>e.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}))

//Funções Conversor de Valores_________________________________________________________________________________________________
const Ared=e=>Math.floor(e)
const Cm =e=> parseFloat(e).toFixed(2).replace('.',',')
const Fxd=e=> parseFloat(e).toFixed(2)
const RS =e=> `R$ ${Cm(e)}`
const RS_HTML=e=>`<div class="Ct"><div>R$</div><div class="VVLR">${Cm(e)}</div></div>`
const ParsMil=e=>parseFloat(Num($(e).value))*500
const Porcent=(V1,V2)=>((V1-V2)/V1)*100
const Num =e=>typeof e === 'number' ? e : parseFloat(e.replace(',', '.'))
const Pct =e=>`${(e*100).toFixed(2)}%`
const Virg=e=>e.replace('.',',')
const Zero=Num=>String(Num).padStart(3,'0')

//Funções Conversor de Strings_________________________________________________________________________________________________
const LowCase=Arry=>Arry.filter(e=>e===e.toLowerCase())
const UppCase=Arry=>Arry.filter(e=>e===e.toUpperCase())
const CleaAsps=e=>e.replace(/\*.*\*/,'').replace("*",'')

// Funções de Validações_______________________________________________________________________________________________________
function is_Visivel(e){const r=e&&e.getBoundingClientRect();return!!(r&&r.bottom>=0&&r.right>=0&&r.top<=innerHeight&&r.left<=innerWidth)}
const ENone=e=>window.getComputedStyle($(e)).display==='none'
const EShow=e=>window.getComputedStyle($(e)).display!=='none'
const UndefNull=e=>e===undefined||e===null
const IsNum=e=>typeof e==='number'
const isCnvs=e=>e.tagName === 'CANVAS'
const KeyEnter=e=>(e.code === 'Enter' || e.keyCode === 13)
const temClass=(e,Stg)=>e.classList.contains(Stg)

// Funções de Templates________________________________________________________________________________________________________
const Div=(e,Class='')=>`<div class="${Class}">${e}</div>`
const MapDiv=(e,on)=>e.map(e=>`<div onclick="${on}">${e}</div>`).join('')
const SrcSVG=e=>`data:image/svg+xml,${encodeURIComponent(e)}`

// Funções de Eventos__________________________________________________________________________________________________________
function EvtChng(Stg,Calback){$All(Stg).forEach(e=>{e.addEventListener('change',Calback)})}
function EvtInpt(Stg,Calback){$All(Stg).forEach(e=>{e.addEventListener('input' ,Calback)})}
function EvtClik(Stg,Calback){$All(Stg).forEach(e=>{e.addEventListener('click' ,Calback)})}


//Funções Geradores____________________________________________________________________________________________________________
const Rndn=e=>Math.floor(Math.random()*e)
const Randomm=(min,max)=>Rndn((max-min+1))+min
const GerarID=()=>`ID-${Rndn(900)+100}`
const GerarIT=()=>`IT-${Rndn(900)+100}`

const AddRequired=e=>e.forEach(e=>{$(e).required = true})
const EscRequired=e=>e.forEach(e=>{$(e).required = false})


const FirstFunc = {}
const First=(e)=>!FirstFunc[e]&&(FirstFunc[e]=true)



const Ctrl=e=>e.button === 0 && e.ctrlKey ? true : false



const UniqArry=(arr,chk)=>chk?arr.filter((e,x,eu)=>eu.findIndex(a=>a[0]===e[0])===x):Array.from(new Set(arr.map(JSON.stringify)),JSON.parse)

const CalcMB=e=>Num((new Blob([JSON.stringify(e)]).size/1024).toFixed(2))


// Funções de CSS
function AddClss(e,Stg){$(e).classList.add(Stg)}
function AddClssAll(e,Stg){$All(e).forEach(c=>AddClss(c,Stg))}
function RmvClss(e,Stg){$(e).classList.remove(Stg)}
function RmvClssAll(e,Stg){$(e).forEach(E=>{E.classList.remove(Stg)})}
function TogClss(e,Stg){$(e).classList.toggle(Stg)}


const IsChkTru=(e)=>e.checked===true
const IsChkFal=(e)=>e.checked===false
const ChkTru=(e)=>e.checked=true
const ChkFal=(e)=>e.checked=false
const ChkTru_Clik=(e)=>{e.checked=true ; DispClick(e)}
const ChkFal_Clik=(e)=>{e.checked=false ; DispClick(e)}


// Ações DOM______________________________________________________________
function InnTogg(e,Stg,Stg2){$(e).innerHTML = $(e).innerHTML===Stg?Stg2:Stg}
function ValTogg(e,Stg,Stg2){$(e).value = $(e).value===Stg?Stg2:Stg}