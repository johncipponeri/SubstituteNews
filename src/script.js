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

var lines = document.body.textContent.split('\n');

for(var l = 0; l < lines.length; l += 1) {
	var words = lines[l].split(/\s+/);

	for(var w = 0; w < words.length; w += 1) {
		for(var s = 0; s < substitutions.length; s += 2) {
			words[w] = words[w].toLowerCase().replace(new RegExp(substitutions[s], 'g'), substitutions[s + 1]);	
		}
	} lines[l] = words.join(" ");
}

document.body.textContent = lines.join('\n');