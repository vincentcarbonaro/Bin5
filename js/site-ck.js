$(document).ready(function(){$(function(){$("nav ul li").click(function(){$(".content").children().each(function(){$(this).toggle(!1)});$("#"+this.classList[0]).toggle(!0)})})});