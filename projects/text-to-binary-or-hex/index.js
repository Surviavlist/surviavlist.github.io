const input = document.getElementById('in')
const output = document.getElementById('out')
const to = document.getElementById('to')
const delimiter = document.getElementById('delimiter')

String.prototype.toHEX = function() {
  let coded = []
  for (let i = 0; i < this.length; i++) {
    coded.push(this.charCodeAt(i).toString(16))
  }
  return coded.join(delimiter.value)
}

String.prototype.toBINARY = function() {
  let coded = []
  for (let i = 0; i < this.length; i++) {
    coded.push(this.charCodeAt(i).toString(2))
  }
  return coded.join(delimiter.value)
}

function convert() {
  let out = ''
  let text = input.value
  try {
    out = ( to.value == 'binary' ? text.toBINARY() : text.toHEX() )
  } catch(error) {
    alert(error)
  }
  output.value = out
}

function select() {
  output.select()
  output.setSelectionRange(0, 99999)
}
