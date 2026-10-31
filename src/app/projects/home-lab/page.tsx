export default function HomeLabPage() {
    return (
        <main className="px-6 py-24">
            <div className="mx-auto max-w-4xl">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    Infrastructure / DevOps
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Kubernetes Home Lab
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8">
                    A self-hosted Kubernetes environment built on Ubuntu Server for hands-on experience
                with container orchestration, networking, infrastructure services, monitoring, and
                automation.
                </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-y py-4">
                <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        Platform
                    </p>
                    <p className="mt-1 text-sm font-medium">
                        Ubuntu Server / MicroK8s
                    </p>
                </div>

                <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        Environment
                    </p>
                    <p className="mt-1 text-sm font-medium">
                        Self-Hosted
                    </p>
                </div>

                <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        Cluster
                    </p>
                    <p className="mt-1 text-sm font-medium">
                        Single Node
                    </p>
                </div>

                <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        Status
                    </p>
                    <p className="mt-1 text-sm font-medium text-primary">
                        Active
                    </p>
                </div>
            </div>
            <section className="mt-16">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    Overview
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Why I Built It
                </h2>

                <p className="mt-6 leading-7">
                    I built this home lab to move beyond learning infrastructure concepts in isolation and gain
                    practical experience designing, deploying, securing, and operating systems that I am
                    responsible for maintaining.
                </p>

                <p className="mt-4 leading-7">
                    What began as a Ubuntu Server environment for Linux administration and networking has
                    evolved into a self-hosted Kubernetes platform where I can work directly with containerization,
                    service networking, DNS, ingress, TLS, infrastructure automation, monitoring, and application
                    deployment. Because I operate the environment myself, each new capability also requires me to
                    troubleshoot failures, understand dependencies, and make deliberate engineering decisions
                    about how the pieces fit together.
                </p>
            </section>

            <section className="mt-16">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    Architecture
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Infrastructure Architecture
                </h2>

                <p className="mt-6 max-w-3xl leading-7">
                    The environment is built as a layered infrastructure stack, beginning with Ubuntu Server
                    on the physical host and extending through Kubernetes orchestration, container networking,
                    service delivery, DNS, and TLS. Each layer provides capabilities used by the services
                    and applications running above it.
                </p>


                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <article className="rounded-xl border bg-card p-6 text-card-foreground">
                        <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                            Foundation
                        </p>

                        <h3 className="mt-2 text-xl font-semibold tracking-tight">
                            Host System
                        </h3>

                        <p className="mt-4 leading-7 text-muted-foreground">
                            Ubuntu Server provides the Linux foundation for the environment, including system
                            administration, networking, storage, SSH access, and host-level systemd services.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                Ubuntu Server
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                Linux
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                systemd
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                SSH
                            </span>
                        </div>
                    </article>

                    <article className="rounded-xl border bg-card p-6 text-card-foreground">
                        <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                            Orchestration
                        </p>

                        <h3 className="mt-2 text-xl font-semibold tracking-tight">
                            Kubernetes Platform
                        </h3>

                        <p className="mt-4 leading-7 text-muted-foreground">
                            MicroK8s provides the Kubernetes control plane and orchestration environment
                            used to deploy, manage, and operate containerized workloads across the lab.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                MicroK8s
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                Kubernetes
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                Calico
                            </span>
                        </div>
                    </article>

                    <article className="rounded-xl border bg-card p-6 text-card-foreground">
                        <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                            Connectivity
                        </p>

                        <h3 className="mt-2 text-xl font-semibold tracking-tight">
                            Networking & DNS
                        </h3>

                        <p className="mt-4 leading-7 text-muted-foreground">
                            The environment operates across IPv4 and IPv6 networking, with internal DNS
                            supporting service resolution and AdGuard Home providing network-wide DNS
                            filtering for local clients.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                IPv4
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                IPv6
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                DNS
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                AdGuard Home
                            </span>
                        </div>
                    </article>

                    <article className="rounded-xl border bg-card p-6 text-card-foreground">
                        <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                            Service Delivery
                        </p>

                        <h3 className="mt-2 text-xl font-semibold tracking-tight">
                            Ingress & Load Balancing
                        </h3>

                        <p className="mt-4 leading-7 text-muted-foreground">
                            Kubernetes Services expose workloads internally while Traefik provides ingress
                            routing and MetalLB supplies load-balancer addressing for services made available
                            on the local network.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                Traefik
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                MetalLB
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                Ingress
                            </span>
                        </div>
                    </article>
                    <article className="rounded-xl border bg-card p-6 text-card-foreground">
                        <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                            Trust
                        </p>

                        <h3 className="mt-2 text-xl font-semibold tracking-tight">
                            Security & TLS
                        </h3>

                        <p className="mt-4 leading-7 text-muted-foreground">
                            An internal certificate authority and cert-manager provide certificate lifecycle management
                            and trusted HTTPS for internal services while keeping certificate issuance under local control.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                cert-manager
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                PKI
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                TLS
                            </span>
                        </div>
                    </article>

                    <article className="rounded-xl border bg-card p-6 text-card-foreground">
                        <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                            Workloads
                        </p>

                        <h3 className="mt-2 text-xl font-semibold tracking-tight">
                            Storage & Registry
                        </h3>

                        <p className="mt-4 leading-7 text-muted-foreground">
                            Persistent storage supports stateful workloads while a private container registry provides
                            an internal source for versioned application images deployed in Kubernetes.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                Persistent Storage
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                OCI Registry
                            </span>
                            <span className="rounded-md border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                                Docker
                            </span>
                        </div>
                    </article>
                </div>
            </section>

            <section className="mt-16">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    Implementation
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Key Engineering Work
                </h2>

                <div className="mt-8 divide-y border-y">
                    <article className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <p className="font-mono text-sm font-medium text-primary">
                            01
                        </p>

                        <div>

                            <h3 className="text-xl font-semibold tracking-tight">
                                Kubernetes Infrastructure
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                                Configured and operate a single-node MicroK8s cluster on Ubuntu Server, including Kubernetes
                                DNS, persistent storage, metrics collection, container networking with Calico, and the
                                supporting services required to run containerized workloads.
                            </p>
                        </div>
                    </article>

                    <article className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <p className="font-mono text-sm font-medium text-primary">
                            02
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold tracking-tight">
                                Network-Wide DNS Filtering
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                                Deployed AdGuard Home as a Kubernetes-managed service to provide DNS filtering across the local
                                network while supporting both IPv4 and IPv6 clients.
                            </p>
                        </div>
                    </article>

                    <article className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <p className="font-mono text-sm font-medium text-primary">
                            03
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold tracking-tight">
                                Private Container Registry
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                                Configured an internal HTTPS container registry to store and distribute versioned application
                                images used by Kubernetes deployments within the lab.
                            </p>
                        </div>
                    </article>

                    <article className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <p className="font-mono text-sm font-medium text-primary">
                            04
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold tracking-tight">
                                Ingress & Load Balancing
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                                Implemented Traefik ingress routing with MetalLB to provide controlled access to Kubernetes
                                services from the local network using stable load-balancer addressing.
                            </p>
                        </div>
                    </article>

                    <article className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <p className="font-mono text-sm font-medium text-primary">
                            05
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold tracking-tight">
                                Internal PKI & TLS
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                                Established an internal certificate authority and integrated cert-manager with
                                Kubernetes to automate certificate issuance and provide trusted HTTPS for
                                internal services.
                            </p>
                        </div>
                    </article>

                    <article className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <p className="font-mono text-sm font-medium text-primary">
                            06
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold tracking-tight">
                                Dual-Stack Networking
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                                Configured the server to operate with both IPv4 and IPv6 and validated Kubernetes
                                networking, DNS resolution, and service connectivity across the environment.
                            </p>
                        </div>
                    </article>

                    <article className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <p className="font-mono text-sm font-medium text-primary">
                            07
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold tracking-tight">
                                IPv6 Prefix Monitoring
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                                Built a host-level monitoring solution using a shell script, systemd service,
                                and systemd timer to detect IPv6 prefix changes and send state-aware notifications
                                when network conditions change.
                            </p>
                        </div>
                    </article>

                    <article className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <p className="font-mono text-sm font-medium text-primary">
                            08
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold tracking-tight">
                                Application Deployment
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                                Containerized this portfolio as a production Next.js application and deployed it
                                to Kubernetes using an immutable container image, Deployment, Service, ingress
                                routing, TLS, health probes, resource controls, and container security settings.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="mt-16">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    Security
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Security & Hardening
                </h2>

                <p className="mt-6 max-w-3xl leading-7">
                    Security controls are applied across the application, container, Kubernetes, and network
                    layers rather than relying on a single perimeter.  The portfolio deployment is configured
                    to reduce unnecessary privileges while maintaining the health and resource controls required
                    for reliable operation.
                </p>

                <div className="mt-8 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2">
                    <div className="bg-card p-6">
                        <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                            Container
                        </p>

                        <h3 className="mt-2 text-lg font-semibold tracking-tight">
                            Least Privilege
                        </h3>

                        <p className="mt-3 leading-7 text-muted-foreground">
                            The application container runs as a non-root user with privilege escalation disabled
                            and a read-only root filesystem to reduce the writable and privileged attack surface
                            available at runtime.
                        </p>
                    </div>

                    <div className="bg-card p-6">
                        <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                            Kubernetes
                        </p>

                        <h3 className="mt-2 text-lg font-semibold tracking-tight">
                            Workload Isolation
                        </h3>

                        <p className="mt-3 leading-7 text-muted-foreground">
                            Automatic service-account token mounting is disabled for the portfolio workload
                            because the application does not require access to the Kubernetes API.
                        </p>
                    </div>

                    <div className="bg-card p-6">
                        <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                            Transport
                        </p>

                        <h3 className="mt-2 text-lg font-semibold tracking-tight">
                            Trusted HTTPS
                        </h3>

                        <p className="mt-3 leading-7 text-muted-foreground">
                            Internal services use TLS certificates issued through the lab&apos;s private certificate infrastructure,
                            providing encrypted and trusted HTTPS communication within the environment.
                        </p>
                    </div>

                    <div className="bg-card p-6">
                        <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                            Operations
                        </p>

                        <h3 className="mt-2 text-lg font-semibold tracking-tight">
                            Health & Resource Controls
                        </h3>

                        <p className="mt-3 leading-7 text-muted-foreground">
                            Readiness and liveness probes monitor application health while CPU and memory requests and limits
                            define expected resource use and help Kubernetes manage the workload predictably.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-16">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    Deployment
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Application Delivery Path
                </h2>

                <p className="mt-6 max-w-3xl leading-7">
                    The portfolio follows a container-based deployment path from source
                    code to a running Kubernetes workload. Each stage has a specific
                    responsibility, from producing the application artifact to routing
                    trusted HTTPS traffic to the running container.
                </p>

                <div className="mt-8 grid gap-3 md:grid-cols-7 md:items-center">
                    <div className="rounded-lg border bg-card p-4 text-center">
                        <p className="font-mono text-xs uppercase tracking-wider text-primary">
                            01
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            Source Code
                        </p>
                    </div>

                    <div
                        className="text-center font-mono text-muted-foreground"
                        aria-hidden="true"
                    >
                        <span className="md:hidden">↓</span>
                        <span className="hidden md:inline">→</span>
                    </div>

                    <div className="rounded-lg border bg-card p-4 text-center">
                        <p className="font-mono text-xs uppercase tracking-wider text-primary">
                            02
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            Docker Image
                        </p>
                    </div>

                   <div
                        className="text-center font-mono text-muted-foreground"
                        aria-hidden="true"
                    >
                        <span className="md:hidden">↓</span>
                        <span className="hidden md:inline">→</span>
                    </div>

                    <div className="rounded-lg border bg-card p-4 text-center">
                        <p className="font-mono text-xs uppercase tracking-wider text-primary">
                            03
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            Private Registry
                        </p>
                    </div>

                    <div
                        className="text-center font-mono text-muted-foreground"
                        aria-hidden="true"
                    >
                        <span className="md:hidden">↓</span>
                        <span className="hidden md:inline">→</span>
                    </div>

                    <div className="rounded-lg border bg-card p-4 text-center">
                        <p className="font-mono text-xs uppercase tracking-wider text-primary">
                            04
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            Kubernetes
                        </p>
                    </div>
                </div>

                <div
                    className="my-3 text-center font-mono text-muted-foreground md:hidden"
                    aria-hidden="true"
                >
                    ↓
                </div>

                <div className="mt-3 grid gap-3 md:grid-cols-7 md:items-center">
                    <div className="rounded-lg border bg-card p-4 text-center">
                        <p className="font-mono text-xs uppercase tracking-wider text-primary">
                            05
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            Service
                        </p>
                    </div>

                    <div
                        className="text-center font-mono text-muted-foreground"
                        aria-hidden="true"
                    >
                        <span className="md:hidden">↓</span>
                        <span className="hidden md:inline">→</span>
                    </div>

                    <div className="rounded-lg border bg-card p-4 text-center">
                        <p className="font-mono text-xs uppercase tracking-wider text-primary">
                            06
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            Traefik
                        </p>
                    </div>

                    <div
                        className="text-center font-mono text-muted-foreground"
                        aria-hidden="true"
                    >
                        <span className="md:hidden">↓</span>
                        <span className="hidden md:inline">→</span>
                    </div>

                    <div className="rounded-lg border bg-card p-4 text-center">
                        <p className="font-mono text-xs uppercase tracking-wider text-primary">
                            07
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            HTTPS
                        </p>
                    </div>

                    <div
                        className="text-center font-mono text-muted-foreground"
                        aria-hidden="true"
                    >
                        <span className="md:hidden">↓</span>
                        <span className="hidden md:inline">→</span>
                    </div>

                    <div className="rounded-lg border bg-card p-4 text-center">
                        <p className="font-mono text-xs uppercase tracking-wider text-primary">
                            08
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            Application
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-16">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    Engineering Notes
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Decisions & Lessons Learned
                </h2>

                <p className="mt-6 max-w-3xl leading-7">
                    Building the lab has required more than deploying individual technologies. Each addition
                    introduced decisions about architecture, security, networking, reliability, and operational
                    complexity. Working through those tradeoffs has been one of the most valuable parts of the project.
                </p>

                <div className="mt-8 divide-y border-y">
                    <article className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <p className="font-mono text-sm font-medium text-primary">
                            01
                        </p>

                        <div>
                            <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                                Platform Selection
                            </p>
                            <h3 className="mt-2 text-xl font-semibold tracking-tight">
                                Build for the Hardware You Have
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                                I chose a single-node MicroK8s environment to build practical Kubernetes experience
                                on existing hardware without introducing unnecessary infrastructure. The lab is
                                intentionally sized for its current purpose while still exposing me to the core
                                orchestration, networking, storage, and workload-management concepts used by
                                Kubernetes.
                            </p>
                        </div>
                    </article>

                    <article className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <p className="font-mono text-sm font-medium text-primary">
                            02
                        </p>

                        <div>
                            <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                                Networking
                            </p>

                            <h3 className="mt-2 text-xl font-semibold tracking-tight">
                                Preserve IPv6, Understand It
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                                When IPv6 introduced additional complexity, I chose to understand the behavior
                                rather than disable it. Working through addressing, SLAAC, DNS, routing, and
                                changing ISP prefixes strengthened my understanding of dual-stack networking
                                and led me to build monitoring around conditions I do not directly control.
                            </p>
                        </div>
                    </article>

                    <article className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <p className="font-mono text-sm font-medium text-primary">
                            03
                        </p>

                        <div>
                            <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                                PKI & Network Boundaries
                            </p>

                            <h3 className="mt-2 text-xl font-semibold tracking-tight">
                                Separate Trust from Exposure
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                                Building an internal certificate authority reinforced that certificate trust and network
                                exposure solve different problems. Internal services can use trusted HTTPS without becoming
                                public services, allowing me to improve transport security while keeping the lab behind its
                                existing network boundary.
                            </p>
                        </div>
                    </article>

                    <article className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <p className="font-mono text-sm font-medium text-primary">
                            04
                        </p>

                        <div>
                            <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                                Automation
                            </p>

                            <h3 className="mt-2 text-xl font-semibold tracking-tight">
                                Design Automation Around the Boundary
                            </h3>

                            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                                Keeping the container registry private improves the lab&apos;s network boundary,
                                but it also affects future CI/CD design. A cloud-hosted runner cannot directly
                                reach an internal-only registry, so deployment automation must account for where
                                the runner executes and which systems it is permitted to reach.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}
