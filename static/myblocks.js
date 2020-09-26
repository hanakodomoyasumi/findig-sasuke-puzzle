Blockly.Blocks['move_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
//    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn left \u21b0");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
//    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn right \u21b1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
//    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['if_blue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("If square is blue");
    this.appendStatementInput("COND_CMDS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
//    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['if_green'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("If square is green");
    this.appendStatementInput("COND_CMDS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
//    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['repeat_forever'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Repeat forever");
    this.appendStatementInput("REPEAT_CMDS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
//    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['repeat_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Repeat")
        .appendField(new Blockly.FieldTextInput("2"), "TIMES")
        .appendField("times");
    this.appendStatementInput("REPEAT_CMDS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
//    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['when_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When run");
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
//    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['move_forward'] = function(block) {
  var code = 'moveForward();\n';
  return code;
};

Blockly.JavaScript['turn_left'] = function(block) {
  var code = 'turnLeft();\n';
  return code;
};

Blockly.JavaScript['turn_right'] = function(block) {
  var code = 'turnRight();\n';
  return code;
};

Blockly.JavaScript['if_blue'] = function(block) {
  var statements_cond_cmds = Blockly.JavaScript.statementToCode(block, 'COND_CMDS');
  var code = 'if (squareIsBlue()) {\n' + statements_cond_cmds + '};\n';
  return code;
};

Blockly.JavaScript['if_green'] = function(block) {
  var statements_cond_cmds = Blockly.JavaScript.statementToCode(block, 'COND_CMDS');
  var code = 'if (squareIsGreen()) {\n' + statements_cond_cmds + '};\n';
  return code;
};

Blockly.JavaScript['repeat_forever'] = function(block) {
  var statements_cond_cmds = Blockly.JavaScript.statementToCode(block, 'REPEAT_CMDS');
  var code = 'while(true) {\n' + statements_cond_cmds + '}\n';
  return code;
};

var loopsUsed = 0;
var bad_repeat_numbers;
Blockly.JavaScript['repeat_n'] = function(block) {
  var text_times = block.getFieldValue('TIMES');
  if (!/^\d+$/.test(text_times)) {
    bad_repeat_numbers = true;
    text_times = '0';
  }

  var loopVar = 'i' + loopsUsed;
  loopsUsed++;
  var statements_repeat_cmds = Blockly.JavaScript.statementToCode(block, 'REPEAT_CMDS');
  var code = 'for(var ' + loopVar + ' = 0; ' + loopVar + ' < ' + text_times + '; ' + loopVar + '++) {\n' + statements_repeat_cmds + '}\n';
  return code;
};

Blockly.JavaScript['when_run'] = function(block) {
  var code = 'whenRun();\n';
  return code;
};
