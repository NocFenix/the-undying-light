import { StoryOption } from './story.option';

export interface StoryChoice {
    Choice: number;
    IsSet: boolean;
    OptionSet?: number;
    Options: StoryOption[];
}