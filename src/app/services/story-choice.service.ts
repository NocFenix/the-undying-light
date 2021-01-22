import { Injectable } from '@angular/core';
import {StoryChoice, StoryOption } from '../dark-edge-of-space/models';

@Injectable({
  providedIn: 'root'
})
export class StoryChoiceService {

    constructor() { }

    public getChoices(forJern:boolean):StoryChoice[] {
        if (forJern)
            return this.jernChoices;
        else
            return this.yessaChoices;
    }

    private jernChoices:StoryChoice[] = [
        {
            Choice: 0,
            IsSet: false,
            Options: [
                {
                    Option: 0,
                    Value: `"Sure, sis, I'll get right on that so you don't freeze your tits off."`,
                    Response: `Yessa laughs as she moves towards to exit of the cryochamber.
                    <br /><br />
                    "Yeah? Well, you better hurry up then, because these things are hard enough to cut diamonds."
                    <br /><br />
                    "Not sure if you're really supposed to talk to your brother like that," Kole chimes in as she climbs out of her own cryopod, revealing her  naked, slender body.
                    <br /><br />
                    "Jesus, and I'm pretty sure you're <i>not</i> supposed to go into cryo naked," Yessa replied.
                    She glances at you, and adds with a laugh, "Hey, avert your eyes you fuckin' perve!".
                    <br /><br />
                    She chuckles again as the bulkhead door slides open letting her and Kole leave. 
                    You cannot help but chuckle yourself as you climb out of the cryopod, feet slapping down on the cold, metal floor.`
                },
                {
                    Option: 1,
                    Value: `"Jesus, the least you could do is wait until I get dressed first."`,
                    Response: `Yessa laughs as she moves towards to exit of the cryochamber.
                    <br /><br />
                    "Alright, alright," she says with a smile. "Speaking of getting dressed, I better see to that particular activity myself.
                    Well, last one to the shower gets the cold water!"
                    <br /><br />
                    She laughs out loud again as the bulkhead door slides open letting her leave the room. 
                    You cannot help by smile yourself as you climb out of the cryopod, feet slapping down on the cold, metal floor.`
                }
            ]
        },
        {
            Choice: 1,
            IsSet: false,
            Options: [
                {
                    Option: 0,
                    Value: `"Ah, fuck that. We'll leave them for my sister."`,
                    Response: `Kole grins and holds up a hand for a high-five.
                    <br /><br />
                    "Fuck yeah, man. We already have enough to do. They should just be grateful we're gonna get the heating back on, am-I-right?"
                    <br /><br />
                    "Pretty much," you say. "Well, let's get to it, this place is a goddamn freezer."`
                },
                {
                    Option: 1,
                    Value: `"Fine, fine, but we gotta see to the heaters first."`,
                    Response: `Kole frowns and shakes her head.
                    <br /><br />
                    "Jesus, do you have no sense of humor?" she says mournfully. "Or maybe...perhaps you just need to get laid," she adds with a wink.
                    <br /><br />
                    She spins around saunters off towards the maintenance deck.
                    <br /><br />
                    "I've got a fucking sense of humor," you mutter to her excellent backside, "There's just priorities, ya know?"`
                }
            ]
        },
        {
            Choice: 2,
            IsSet: false,
            Options: [
                {
                    Option: 0,
                    Value: `"Hand over that <span class="item">Maintenance Jack</span> and I'll continue forward to the <span class="place">Reactor</span> to fix the issue, while you go get the Geiger Counter."`,
                    Response: `Kole frowns, but hands over the <span class="item">Maintenance Jack</span>.
                    <br /><br />
                    "Alright, you're the boss. I'll be back as soon as I can. Hopefully it's nothing, yeah?"
                    <br /><br />
                    "Yeah," you say, with a frown of your own. "But, if it is something, we need to fix the problem sooner rather than later. 
                    Don't take too long though, just in case."
                    <br /><br />
                    "Sure thing," she says with a nods before turning to hurry back the way you came.`
                },
                {
                    Option: 1,
                    Value: `"Yeah, let's be safe, not sorry. I say we go back to the <span class="place">Maintenance Office</span> for the <span class="item">Geiger Counter</span>."`,
                    Response: `Kole nods in approval.
                    <br /><br />
                    "Alright" she says with a smile. "You go back and get it, but I'm gonna wait here, because I'm sure I'd get hypothermia if I have to go back into the cold parts of the ship."
                    <br /><br />
                    "Well, if you'd keep your damn clothes on it wouldn't be an issue," you reply, rolling your eyes. "Just don't go any further until I'm back, right?"
                    <br /><br />
                    "Yup, I'll just be here enjoying this little sauna," she replies with a grin.`
                }
            ]
        },
        {
            Choice: 3,
            IsSet: false,
            Options: [
                {
                    Option: 0, // previous choice maintenance jack
                    Value: `"Yeah, let's move on to the <span class="place">Reactor</span> and see if we can get these heating elements online properly."`,
                    Response: `Kole nods and stands up. "Alright, let's do it."
                    <br /><br />
                    You grab the <span class="item">Maintenance Jack</span> and stand up, grimacing as your back screams in pain. 
                    It's unpleasant, but you have to bear it to make sure things aren't worse than one bad pipe.
                    <br /><br />
                    "Hey are you alright?" Kole asks, concern painting her face.
                    <br /<br />
                    You force yourself to nod. "Just a little burned, but it can wait until we make sure nothing else is broken."`
                },
                {
                    Option: 1, // previous choice maintenance jack
                    Value: `"Actually, I think I should head to <span class="place">MedBay</span> and get my back checked out."`,
                    Response: `"Oh shit, what happened to it?" Kole asks, concern painting her face.
                    <br /><br />
                    "Blast of scalding hot steam got me when I was heading to seal the valve. 
                    Hopefully it isn't too bad, but it hurts enough I want to be safe, not sorry."
                    <br /><br />
                    Kole picks up the <span class="item">Maintenance Jack</span> and hangs it from her toolbet again. 
                    "Alright, I'll hang onto this and the Geiger Counter then and continue to check stuff out while you see to yourself."`
                },
                {
                    Option: 2, // previous choice geiger counter
                    Value: ``,
                    Response: ``
                },
                {
                    Option: 3, // previous choice geiger counter
                    Value: ``,
                    Response: ``
                }
            ]
        }
    ]

    private yessaChoices:StoryChoice[] = [
        {
            Choice: 0,
            IsSet: false,
            Options: [
                {
                    Option: 0,
                    Value: `"Well, it definitely turned THIS witch's tits into hard little diamonds."`,
                    Response: `Jern cringes as he hurries to the exit of the cryochamber.
                    <br /><br />
                    "Do you really have to point shit like that out to your brother?" he asks sourly. "Don't worry, as soon as I'm dressed I'll get on the damn heaters."
                    <br /><br />
                    "She just gets it from you," Kole chimes in, flipping her short flaxen hair out of her eyes. "Hell, my nipples are hard as rocks too."
                    <br /><br />
                    "Yeah, well we all know his thoughts on yours," Pho adds, "Wouldn't stop oggling you as you undressed before going into cryo."
                    <br /><br />
                    "What the fuck is this, pick on Jern day?" he asks, grumpily.
                    <br /><br />
                    You chuckle at his embarassment as he heads through the bulkhead.
                    Then, bracing yourself for the cold floor under your feet, you pull yourself out of the cryopod.`
                },
                {
                    Option: 1,
                    Value: `"God, your mouth is worse than a marine slogging it through the mud in the rain."`,
                    Response: `He smirks and says, "Oh please, at least I don't talk like they do when they're on leave lookin' for a piece of ass.
                    Hmm, kinda like someone else I know," he adds, looking pointedly at you.
                    <br /><br />
                    You flip him off with a pleasant smile. He shakes his head as he moves towards the cryochamber exit and mutters, "Hopefully the fuckin' water heater is working."
                    <br /><br />
                    With a <i>whoosh</i> the bulkhead door opens and he heads out.
                    Then, bracing yourself for the cold floor under your feet, you pull yourself out of the cryopod.`
                }
            ]
        },
        {
            Choice: 1,
            IsSet: false,
            Options: [
                {
                    Option: 0,
                    Value: `"Don't you dare for one minute believe I'm the house-wife who's gonna do everyone's dishes!"`,
                    Response: `Pho chuckles and smiles. "Come on now," he says, "I'm just trying to get a rise out of you. Looks like I succeeded, too!"
                    <br /><br />
                    You smile and shake your head.
                    <br /><br />
                    "Yeah, I'm one to talk. That's the kind of shit I pull on Jern all the time. 
                    It must be the cold getting to me. Hopefully he fixes those heaters soon."
                    <br /><br />
                    Pho nods in agreement and falls into step beside you as you make your way to the <span class="place">Bridge</span>.
                    "I guess I'm just lucky that I've got all this extra insulation," he says with a boistrous laugh.
                    `
                },
                {
                    Option: 1,
                    Value: `"Sure, whatever. I'll wash, and you can dry."`,
                    Response: `Pho shakes head, seeming quite serious. "No, no, young miss. We can just leave this mess for your brother, ha!"
                    <br /><br />
                    You laugh out loud with him. "Yeah, that sounds like a great idea. Wouldn't kill Jern to learn to clean up after himself. 
                    Come on, I'll race ya to the <span class="place">Bridge</span>!"
                    <br /><br />
                    "Ha, ha!" he exclaims. "I think you'll win. I didn't get all these love handles by racing, after all!"`
                }
            ]
        },
        {
            Choice: 2,
            IsSet: false,
            Options: [
                {
                    Option: 0,
                    Value: `"Well, I <i>am</i> the ship's Pilot, so I may as well confirm our location. I'll take the <span class="Item">NavComputer</span>, and you can scan the planet."`,
                    Response: ``
                },
                {
                    Option: 1,
                    Value: `"Hell yeah! I'm gonna check out that fancy piece of tech. I get the <span class="Item">Holotable</span>, and you can check the NavComputer."`,
                    Response: ``
                }
            ]
        }
    ]
}