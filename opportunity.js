const oppoStatus = [
  {
    "K_OPPO_STATUS": 1,
    "STATUS": "1. Initial Contact",
    "SUCCESS": 0
  },
  {
    "K_OPPO_STATUS": 2,
    "STATUS": "2. Demonstration",
    "SUCCESS": 25
  },
  {
    "K_OPPO_STATUS": 3,
    "STATUS": "3. Proposal",
    "SUCCESS": 50
  },
  {
    "K_OPPO_STATUS": 4,
    "STATUS": "4. Negotiation",
    "SUCCESS": 75
  },
  {
    "K_OPPO_STATUS": 5,
    "STATUS": "5. Order",
    "SUCCESS": 100
  }
];

const FormComponent = class {
  constructor() {

  }
  start() {
    const list = document.getElementsByName('status');
    
    oppoStatus.forEach((e) => {
      const option = new Option(e.STATUS, e.STATUS)
      list[0].appendChild(option);
    })
    console.log(list[0].value);
    const input = document.getElementsByName('success');
    console.log('Input', input[0].value);
    input[0].value = oppoStatus[oppoStatus.map((e) => e.STATUS).indexOf(list[0].value)].SUCCESS
    // input.values(oppoStatus[oppoStatus.map((e) => e.STATUS).indexOf()])
    // Start modifying the form elements here!
    // You are allowed to add extra methods, properties or change the constructor of this class
  }

  changeListener() {
    const list = document.getElementsByName('status');
    const input = document.getElementsByName('success');
    document.addEventListener('change', () => {
      console.log(list[0].value);
      input[0].value = oppoStatus[oppoStatus.map((e) => e.STATUS).indexOf(list[0].value)].SUCCESS
    });
  }

  onSubmit() {
    const list = document.getElementsByName('status');

    document.addEventListener('submit', (e) => {
      e.preventDefault();
      const output = document.getElementsByClassName('output');
      const actualValue = oppoStatus[oppoStatus.map((e) => e.STATUS).indexOf(list[0].value)];
      output[0].textContent = JSON.stringify(actualValue);
    })
  }
}

const fc = new FormComponent();
fc.start();
fc.changeListener();
fc.onSubmit();