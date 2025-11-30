/**
 * Partner Detail Page
 *
 * Dynamic page displaying comprehensive information about a specific partner.
 * Includes company details, collaboration information, statistics, and impact metrics.
 */

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, MapPin, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPartnerById } from "@/data/partnersData";
import { useTranslation } from "@/contexts/TranslationContext";
const PartnerDetail = () => {
    const {
        partnerId
    } = useParams<{
        partnerId: string;
    }>();
    const {
        t
    } = useTranslation();
    const partner = partnerId ? getPartnerById(partnerId) : undefined;
    if (!partner) {
        return <div className="min-h-screen bg-background">
            <Header />
            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">{t('partner.notFound')}</h1>
                    <p className="text-muted-foreground mb-8">{t('partner.notFoundDesc')}</p>
                    <Link to="/#partnerships">
                        <Button>
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            {t('partner.backToPartnerships')}
                        </Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>;
    }
    return <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-20">
            {/* Back Button */}
            <div className="container mx-auto px-6 mb-8">
                <Link to="/#partnerships">
                    <Button variant="ghost" className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        {t('nav.partnerships')}
                    </Button>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-16">
                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} animate={{
                    opacity: 1,
                    y: 0
                }} transition={{
                    duration: 0.6
                }} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-background to-background border border-border p-12">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

                    <div className="relative grid md:grid-cols-[1.5fr,1fr] gap-16 items-center">
                        <div className="space-y-6">
                            <Badge className="mb-2 text-sm px-4 py-1.5">{partner.industry}</Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">{partner.name}</h1>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">{partner.description}</p>

                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Calendar className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wide">{t('partner.founded')}</p>
                                        <p className="font-semibold text-lg">{partner.founded}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wide">{t('partner.headquarters')}</p>
                                        <p className="font-semibold text-lg">{partner.headquarters}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <TrendingUp className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wide">{t('partner.partnershipSince')}</p>
                                        <p className="font-semibold text-lg">{partner.collaboration.startDate}</p>
                                    </div>
                                </div>
                            </div>

                            {partner.website && <div className="pt-4">
                                <a href={partner.website} target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" variant="outline" className="gap-2">
                                        {t('partner.visitWebsite')}
                                        <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </a>
                            </div>}
                        </div>

                        <div className="h-full min-h-[300px] relative">
                            <div className="sticky top-8 h-full rounded-2xl flex items-center justify-center p-8">
                                <img src={partner.logo} alt={partner.name} className="relative w-full h-full object-contain drop-shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>


            {/* About Section - Full Width Editorial */}
            <section className="mb-32">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="relative mb-16">
                            <div className="absolute -left-8 top-0 text-[12rem] font-black text-primary/5 leading-none select-none">"</div>
                            <div className="relative">
                                <h3 className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 leading-tight">
                                    {t('partner.aboutTitle')} {partner.name}
                                </h3>

                                <div className="space-y-8">
                                    <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-light">
                                        {partner.about}
                                    </p>

                                    <div className="border-l-4 border-primary pl-8 py-4">
                                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
                                            {t('partner.aboutQuote').replace('{name}', partner.name).replace('{industry}', partner.industry.toLowerCase())}
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6 pt-8">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-primary mb-3">
                                                <Users className="w-5 h-5" />
                                                <span className="font-semibold text-sm uppercase tracking-wider">{t('partner.collaboration')}</span>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {t('partner.collaborationDesc')}
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-primary mb-3">
                                                <TrendingUp className="w-5 h-5" />
                                                <span className="font-semibold text-sm uppercase tracking-wider">{t('partner.innovation')}</span>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {t('partner.innovationDesc')}
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-primary mb-3">
                                                <CheckCircle2 className="w-5 h-5" />
                                                <span className="font-semibold text-sm uppercase tracking-wider">{t('partner.results')}</span>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {t('partner.resultsDesc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section - Creative Bento Grid */}
            {partner.gallery && partner.gallery.length > 0 && (
                <section className="container mx-auto px-6 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-12">
                            <h3 className="text-3xl md:text-4xl font-black mb-3">{t('partner.galleryTitle')}</h3>
                            <p className="text-muted-foreground text-lg">{t('partner.gallerySubtitle')}</p>
                        </div>

                        {/* Asymmetric Bento Grid */}
                        <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
                            {/* Large Feature Image - Spans 2 rows, 8 columns on desktop */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="col-span-12 md:col-span-8 row-span-2 relative group overflow-hidden rounded-3xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={partner.gallery[0]}
                                    alt={`${partner.name} showcase 1`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-background font-bold text-lg">{t('partner.featureHighlight')}</p>
                                </div>
                            </motion.div>

                            {/* Two Stacked Images */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="col-span-6 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={partner.gallery[1] || partner.gallery[0]}
                                    alt={`${partner.name} showcase 2`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="col-span-6 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={partner.gallery[2] || partner.gallery[0]}
                                    alt={`${partner.name} showcase 3`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>

                            {/* Wide Panoramic Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="col-span-12 md:col-span-7 row-span-1 relative group overflow-hidden rounded-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={partner.gallery[3] || partner.gallery[0]}
                                    alt={`${partner.name} showcase 4`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>

                            {/* Square Accent */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="col-span-12 md:col-span-5 row-span-1 relative group overflow-hidden rounded-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tl from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={partner.gallery[4] || partner.gallery[0]}
                                    alt={`${partner.name} showcase 5`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            )}


            {/* Impact - Full Width Feature */}
            <section className="container mx-auto px-6 mb-32">
                <motion.div initial={{
                    opacity: 0,
                    y: 30
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} className="relative">

                </motion.div>
            </section>

            {/* CTA Section - Split Design */}
            <section className="container mx-auto px-6 mb-20">
                <motion.div initial={{
                    opacity: 0,
                    y: 30
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border">
                    {/* Left Side - Dark */}
                    <div className="bg-foreground text-background p-12 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                            {t('partner.readyToPartner')}
                        </h2>
                        <p className="text-background/80 text-lg mb-8 font-light">
                            {t('partner.readyToPartnerDesc')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button size="lg" variant="secondary" asChild className="font-semibold">
                                <Link to="/contact">{t('partner.startConversation')}</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - Light with gradient */}
                    <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-background p-12 md:p-16 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                        <div className="relative">
                            <p className="text-muted-foreground mb-6 text-lg">
                                {t('partner.exploreMore')}
                            </p>
                            <Button size="lg" variant="outline" asChild className="font-semibold">
                                <Link to="/#partnerships">{t('partner.viewAllPartners')}</Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>

        <Footer />
    </div>;
};
export default PartnerDetail;
