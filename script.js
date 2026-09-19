const chapters = [
  {id:1,title:"Khởi đầu",content:["Nội dung Chap 1 sẽ được đặt tại đây.","Bạn chỉ cần thay phần này bằng nội dung truyện của mình."]},
  {id:2,title:"Sau nụ hôn bất ngờ",content:["Nội dung Chap 2 sẽ được đặt tại đây."]},
  {id:3,title:"Về chung một nhà",content:["Nội dung Chap 3 sẽ được đặt tại đây."]},
  {id:4,title:"Cùng em đến thư viện",content:["Nội dung Chap 4 sẽ được đặt tại đây."]},
  {id:5,title:"Chap 5",content:["Nội dung Chap 5 sẽ được đặt tại đây."]},
  {id:6,title:"Chap 6",content:["Nội dung Chap 6 sẽ được đặt tại đây."]},
  {id:7,title:"Chap 7",content:["Nội dung Chap 7 sẽ được đặt tại đây."]},
  {id:8,title:"Chap 8",content:["Nội dung Chap 8 sẽ được đặt tại đây."]},
  {id:9,title:"Sáng hôm sau",content:["Nội dung Chap 9 sẽ được đặt tại đây."]},
  {id:10,title:"Chap 10",content:["Nội dung Chap 10 sẽ được đặt tại đây."]},
  {id:11,title:"Chap 11",content:["Nội dung Chap 11 sẽ được đặt tại đây."]}
];

const list = document.getElementById("chapterList");
if(list){
  chapters.forEach(c=>{
    const a=document.createElement("a");
    a.className="chapter-item";
    a.href=`chap.html?chap=${c.id}`;
    a.innerHTML=`<strong>Chap ${c.id}: ${c.title}</strong><span>Đọc →</span>`;
    list.appendChild(a);
  });
}

const params = new URLSearchParams(location.search);
const currentId = Number(params.get("chap") || 1);
const current = chapters.find(c=>c.id===currentId) || chapters[0];

const title = document.getElementById("chapterTitle");
if(title){
  document.getElementById("chapterLabel").textContent=`CHAP ${current.id}`;
  title.textContent=current.title;
  document.getElementById("chapterContent").innerHTML=current.content.map(p=>`<p>${p}</p>`).join("");

  const prev=document.getElementById("prevBtn");
  const next=document.getElementById("nextBtn");
  prev.disabled=current.id===chapters[0].id;
  next.disabled=current.id===chapters[chapters.length-1].id;
  prev.onclick=()=>{ if(current.id>1) location.href=`chap.html?chap=${current.id-1}`; };
  next.onclick=()=>{ if(current.id<chapters.length) location.href=`chap.html?chap=${current.id+1}`; };
}
