import { Injectable } from '@angular/core';
import { Hike } from '../shared/hike';

@Injectable()
export class HikeService {
    hikes: Hike[] = [
        {
          'name': 'Saint-Aubin-du-Cormier',
          'region': 'Bretagne',
          'area': 'Ille-et-Vilaine',
          'startingPoint': 'Plan d\'eau',
          'distance': 12.8,
          'distanceUnit': 'km',
          'duration': 240,
          'heightDifference': 267,
          'description': '(depuis hike service) Randonnée sympa, à démarrer par le plan d_\'eau pour finir sur les hauteurs de Saint Aub',
          'evalution': [4, 5, 3]
        },
        {
          'name': 'Vallée du Couesnon',
          'region': 'Bretagne',
          'area': 'Ille-et-Vilaine',
          'startingPoint': 'Château de la ville olivier',
          'distance': 15.6,
          'distanceUnit': 'km',
          'duration': 270,
          'heightDifference': 200,
          'description': 'Il faut être en forme pour cette rando car il y a beaucoup de dénivelés.',
          'evalution': [5, 5]
        }
      ];
      getHikes() {
        return this.hikes;
      }
}
