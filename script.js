/* Event untuk button di porto */

// ngambil dom button sama item-item nya
const btns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

btns.forEach((btn) => {

  // nambahin event click ke button yang ada di porto
  btn.addEventListener("click", () => {

    // nyimpen value dari attribut filter dari button yang diclick
    const filter = btn.getAttribute('filter');

    // ngeganti display sesuai kesamaan dengan filter
    items.forEach((item) => {
      if (filter === 'all' || item.getAttribute('category') === filter) item.style.display = 'block';
      else item.style.display = 'none';
    });
    
  });
});

/* Logic  untuk ngirim email pake email.js*/
emailjs.init('vyftArbroigsotN1w');

// ngambil dom submitButton
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  // ngambil data dair form disimpen dalam dic
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };
  
  // ngirim email via email.js
  emailjs.send(
    'kelompokbst5', 
    'template_fpylhk9', 
    formData, 
    'vyftArbroigsotN1w'
  )
});


// Video Closing each time the button "Close Window" is pressed

// Portfolio 1
// Ambil elemen modal dan iframe video
var modalElement1 = document.getElementById('portfolioModal1');
var videoContainer1 = document.querySelector('.video-portofolio1');
var videoIframe1 = document.getElementById('videomodal1');

// Event listener untuk tombol close dan modal close
modalElement1.addEventListener('hidden.bs.modal', function () {
  // Hapus iframe dari DOM
  videoIframe1.remove();
  
  // Tambahkan iframe kembali ke DOM setelah beberapa waktu
  setTimeout(function() {
      videoContainer1.innerHTML = '<iframe id="videomodal1" src="https://drive.google.com/file/d/15FemN0kPf_BqbpYlwzTc1zGYBm6nbTTP/preview" width="712" height="406" allow="autoplay"></iframe>';
    }, 500); // Delay 500ms untuk memastikan iframe dihapus dan kemudian ditambahkan kembali
  }
);

// Portfolio 2
var modalElement2 = document.getElementById('portfolioModal2');
var videoContainer2 = document.querySelector('.video-portofolio2');
var videoIframe2 = document.getElementById('videomodal2');

modalElement2.addEventListener('hidden.bs.modal', function () {
  videoIframe2.remove();
    setTimeout(function() {
      videoContainer2.innerHTML = '<iframe id="videomodal2" src="https://drive.google.com/file/d/1p5XZr7ryD6fMn1JzNMWvuiQAaeeM7SJ4/preview" width="712" height="406" allow="autoplay"></iframe>';
    }, 500);
  }
);

// Portfolio 3
var modalElement3 = document.getElementById('portfolioModal3');
var videoContainer3 = document.querySelector('.video-portofolio3');
var videoIframe3 = document.getElementById('videomodal3');

modalElement3.addEventListener('hidden.bs.modal', function () {
  videoIframe3.remove();
    setTimeout(function() {
      videoContainer3.innerHTML = '<iframe id="videomodal3" src="https://drive.google.com/file/d/14DB9sbetRKvltPCtm3zf098LzcuTlfr6/preview" width="712" height="406" allow="autoplay"></iframe>';
    }, 500);
  }
);

// Portfolio 4
var modalElement4 = document.getElementById('portfolioModal4');
var videoContainer4 = document.querySelector('.video-portofolio4');
var videoIframe4 = document.getElementById('videomodal4');

modalElement4.addEventListener('hidden.bs.modal', function () {
  videoIframe4.remove();
    setTimeout(function() {
      videoContainer4.innerHTML = '<iframe id="videomodal4" class="vertikal" src="https://drive.google.com/file/d/1NPMrRVtrDVbxSFlJidTLlMPPXQjt_TPb/preview" allow="autoplay"></iframe>';
    }, 500);
  }
);



