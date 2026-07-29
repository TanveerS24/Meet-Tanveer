import { prisma } from './prisma.client';

export class PortfolioRepository {
  public async getProjects() {
    try {
      return await prisma.project.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      return [];
    }
  }

  public async getExperiences() {
    try {
      return await prisma.experience.findMany();
    } catch (error) {
      return [];
    }
  }

  public async getSkills() {
    try {
      return await prisma.skill.findMany();
    } catch (error) {
      return [];
    }
  }

  public async getAchievements() {
    try {
      return await prisma.achievement.findMany();
    } catch (error) {
      return [];
    }
  }
}

export const portfolioRepository = new PortfolioRepository();
