var substitutions = [
	"witnesses", "these dudes I know",
	"allegedly", "kinda probably",
	"new study", "tumblr post",
	"rebuild", "avenge",
	"space", "spaaace",
	"google glass", "virtual boy",
	"smartphone", "pokedex",
	"electric", "atomic",
	"senator", "elf-lord",
	"car", "cat",
	"election", "eating contest",
	"congressional leaders", "river spirits",
	"homeland security", "homestar runner",
	"could not be reached for comment", "is guilty and everyone knows it"
];

var lines = document.body.innerHTML.split('\n');

for(var l = 0; l < lines.length; l += 1) {
	for(var s = 0; s < substitutions.length; s += 2) {
		lines[l] = lines[l].toLowerCase().replace(new RegExp(substitutions[s], 'g'), substitutions[s + 1]);	
	}
}

document.body.innerHTML = lines.join('\n');